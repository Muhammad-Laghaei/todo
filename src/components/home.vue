<template>
  <app-layout>
    <div class="has-text-centered">
      <button @click="openTaskModalHandler" class="button is-primary is-light">
        addTask
      </button>
    </div>
    <app-table
      :data="data"
      :pageNumber="pageNumber"
      @changeStatusHandler="changeStatusHandler"
      @openEditModalHandler="openEditModalHandler"
      @openDeleteModalHandler="deleteTaskHandler"
    />
    <app-paginate
      :data-size="data.length"
      @setPageNumberHandler="setPageNumberHandler"
    />
    <app-task-modal
      :modalStatus="openTaskModal"
      :isEdit="isEdit"
      :data="selectedTask"
      :index="selectedTaskIndex"
      @closeModalHandler="closeTaskModalHandler"
      @setTaskHandler="setTaskHandler"
      @editTaskHandler="editTaskHandler"
    />
  </app-layout>
</template>
<script>
import Layout from "./layout.vue";
import Table from "./table.vue";
import Paginate from "./paginate.vue";
import TaskModal from "./taskModal.vue";
export default {
  name: "home",
  components: {
    appLayout: Layout,
    appTable: Table,
    appPaginate: Paginate,
    appTaskModal: TaskModal,
  },
  data() {
    return {
      data: [
        {
          taskName: "second",
          date: new Date(2023, 1, 20),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "fourth",
          date: new Date(2023, 1, 19),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "fifth",
          date: new Date(2023, 1, 18),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "six",
          date: new Date(2023, 1, 18),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "seven",
          date: new Date(2023, 1, 18),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "first",
          date: new Date(2023, 1, 17),
          status: "ToDo",
          description: "",
        },
        {
          taskName: "third",
          date: new Date(2023, 1, 15),
          status: "ToDo",
          description: "",
        },
      ],
      openTaskModal: false,
      openDeleteModal: false,
      pageNumber: 1,
      isEdit: false,
      selectedTask: {},
      selectedTaskIndex: null,
    };
  },
  methods: {
    openTaskModalHandler: function () {
      this.openTaskModal = true;
      this.isEdit = false;
    },
    openEditModalHandler: function (index) {
      const selectedTask = this.data[(this.pageNumber - 1) * 5 + index];
      this.openTaskModal = true;
      this.selectedTask = selectedTask;
      this.selectedTaskIndex = index;
      this.isEdit = true;
    },
    openDeleteModalHandler: function (index) {
      this.openDeleteModal = true;
    },
    setPageNumberHandler: function (number) {
      this.pageNumber = number;
    },
    closeTaskModalHandler() {
      this.openTaskModal = false;
    },
    closeDeleteModalHandler() {
      this.openDeleteModal = false;
    },
    changeStatusHandler(status, index) {
      const data = this.data[index];
      console.log(status);
      console.log(index);
      console.log(data);
      data.status = status;
      this.data = data;
    },
    setTaskHandler(title, description, date, edit) {
      const newTask = { taskName: title, date, status: "ToDo", description };
      const data = [...this.data];
      const newData = [...data, newTask];
      const sortedData = this.descendingComparator(newData);
      this.data = sortedData;
    },
    editTaskHandler(editedData, index) {
      const oldData = [...this.data];
      oldData[index] = editedData;
      this.data = oldData;
    },
    deleteTaskHandler(index) {
      const data = [...this.data];
      data.splice([(this.pageNumber - 1) * 5 + index], 1);
      console.log(data);
      this.data = data;
      this.$forceUpdate();
    },
    descendingComparator: function (data) {
      const sortedArray = data.sort(function (a, b) {
        console.log(a);
        if (b["date"] < a["date"]) {
          return -1;
        }
        if (b["date"] > a["date"]) {
          return 1;
        }
        return 0;
      });
      return sortedArray;
    },
  },
};
</script>
