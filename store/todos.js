export const state = () => ({
  searchTerm: null,
  tasks: [
    {
      id: 1,
      status: false,
      dueDate: "2021-10-16",
      title: "Design a new website with  framework"
    },
    {
      id: 2,
      status: false,
      dueDate: null,
      title: "Code up the homepage with Vuetify components"
    },
    {
      id: 3,
      status: false,
      dueDate: "2021-11-16",
      title: "Change the styles of yunus by following material design patterns"
    },
    {
      id: 4,
      status: false,
      dueDate: "2021-10-12",
      title: "Resolve issues on the authentication token life"
    },
    {
      id: 5,
      status: false,
      dueDate: "2021-11-12",
      title: "Technician synthesize parse lime encoding feed Adaptive"
    },
    {
      id: 6,
      status: false,
      dueDate: "2021-11-10",
      title: "methodologies technologies Analyst Chicken Home dynamic Wall"
    },
    {
      id: 7,
      status: false,
      dueDate: "2021-06-15",
      title: "Avon Re-engineered synergies customer Turkish Rustic Timor-Leste"
    },
    {
      id: 8,
      status: false,
      dueDate: null,
      title: "discrete Hawaii Operative capacitor Small payment Devolved"
    }
  ],
  snackbar: {
    status: false,
    text: `Hello, I'm a snackbar`
  },
  sorting: false
});

export const mutations = {
  completeTask(state, payload) {
    const task = state.tasks.find(task => task.id === payload);
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
        ? { ...payload, status: payload.status }
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
  completeTask({ commit }, payload) {
    commit("completeTask", payload);
  },
  addTask({ commit }, payload) {
    if (!payload) {
      return;
    }
    const newTask = {
      id: Date.now(),
      title: payload,
      dueDate: null,
      status: false
    };

    commit("addTask", newTask);
    commit("setSnackbar", {
      status: true,
      text: "New Task successfully added!"
    });
  },
  deleteTask({ commit }, payload) {
    commit("deleteTask", payload);
    commit("setSnackbar", {
      status: true,
      text: "The successfully deleted!"
    });
  },
  editTask({ commit }, payload) {
    commit("editTask", payload);
    commit("setSnackbar", {
      status: true,
      text: "The successfully updated!"
    });
  },
  pickDate({ commit }, payload) {
    commit("pickDate", payload);
  },
  setSearchTerm({ commit }, payload) {
    commit("setSearchTerm", payload);
  },
  toggleSorting({ commit }) {
    commit("toggleSorting");
  },
  setTasks({ commit }, payload) {
    commit("setTasks", payload);
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
