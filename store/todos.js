export const state = () => ({
  searchTerm: null,
  tasks: [],
  snackbar: {
    status: false,
    text: `Hello, I'm a snackbar`
  },
  sorting: false
});

export const mutations = {
  fetchAllTasks(state, payload) {
    const tasks = Object.keys(payload).map(id => {
      return { id: id, ...payload[id] };
    });
    state.tasks = tasks.sort((a, b) => a.order - b.order);
  },
  completeTask(state, payload) {
    const task = state.tasks.find(task => task.id === payload.id);
    task.status = !task.status;
  },
  addTask(state, payload) {
    state.tasks.unshift(payload);
  },
  deleteTask(state, payload) {
    state.tasks = state.tasks.filter(task => task.id !== payload);
  },
  setSnackbar(state, payload) {
    state.snackbar = payload;
  },
  editTask(state, payload) {
    state.tasks = state.tasks.map(task => {
      return task.id === payload.id
        ? { ...payload, status: task.status, dueDate: task.dueDate }
        : { ...task };
    });
  },

  pickDate(state, payload) {
    const { id, dueDate } = payload;
    const task = state.tasks.find(task => task.id === id);
    task.dueDate = dueDate;
  },
  setSearchTerm(state, payload) {
    state.searchTerm = payload;
  },
  toggleSorting(state) {
    state.sorting = !state.sorting;
  },
  setTasks(state, payload) {
    state.tasks = payload;
  }
};

export const actions = {
  async fetchAllTasks({ commit }) {
    try {
      const response = await this.$axios.get(
        process.env.taskAPI + "/tasks.json"
      );
      commit("fetchAllTasks", response.data);
    } catch (error) {
      console.log("Error on fetaching tasks", error);
    }
  },
  async completeTask({ commit }, payload) {
    try {
      await this.$axios.patch(
        `${process.env.taskAPI}/tasks/${payload.id}.json`,
        {
          status: !payload.status
        }
      );

      commit("completeTask", payload);
    } catch (error) {
      console.log("Error on completing task", error);
    }
  },
  async addTask({ commit }, payload) {
    if (!payload) {
      return;
    }
    const newTask = {
      title: payload,
      dueDate: "",
      status: false,
      order: -1
    };

    try {
      const response = await this.$axios.post(
        process.env.taskAPI + "/tasks.json",
        newTask
      );
      commit("addTask", { id: response.data.name, ...newTask });
      commit("setSnackbar", {
        status: true,
        text: "New Task successfully added!"
      });
    } catch (error) {
      console.log("Error on adding a new Task", error);
    }
  },
  async deleteTask({ commit }, payload) {
    try {
      await this.$axios.delete(`${process.env.taskAPI}/tasks/${payload}.json`);

      commit("deleteTask", payload);
      commit("setSnackbar", {
        status: true,
        text: "The successfully deleted!"
      });
    } catch (error) {
      console.log("Error on deleting the Task", error);
    }
  },
  async editTask({ commit }, payload) {
    try {
      await this.$axios.patch(
        `${process.env.taskAPI}/tasks/${payload.id}.json`,
        payload
      );

      commit("editTask", payload);
      commit("setSnackbar", {
        status: true,
        text: "The successfully updated!"
      });
    } catch (error) {
      console.log("Error on editing the Task", error);
    }
  },
  async pickDate({ commit }, payload) {
    const toEdited = {
      dueDate: payload.dueDate
    };
    try {
      await this.$axios.patch(
        `${process.env.taskAPI}/tasks/${payload.id}.json`,
        toEdited
      );
      commit("pickDate", payload);
    } catch (error) {
      console.log("Error on picking date in the Task", error);
    }
  },
  setSearchTerm({ commit }, payload) {
    commit("setSearchTerm", payload);
  },
  toggleSorting({ commit }) {
    commit("toggleSorting");
  },
  async setTasks({ commit }, payload) {
    const orderedTasks = payload.map((task, index) => {
      return { ...task, order: index };
    });

    const tasks = orderedTasks.reduce((acc, val) => {
      acc[val.id] = val;
      return acc;
    }, {});

    await this.$axios.put(`${process.env.taskAPI}/tasks.json`, tasks);

    commit("setTasks", orderedTasks);
  }
};

export const getters = {
  searchTodos(state) {
    if (!state.searchTerm) {
      return state.tasks;
    }
    return state.tasks.filter(task => {
      return task.title.toLowerCase().includes(state.searchTerm.toLowerCase());
    });
  }
};
