<template>
  <div class="is-full">
    <table class="table is-full mx-auto">
      <thead class="">
        <tr>
          <th><abbr title="Position">#</abbr></th>
          <th>Task</th>
          <th><abbr title="Date">Date</abbr></th>
          <th><abbr title="Status">Status</abbr></th>
          <th><abbr title="Options">Options</abbr></th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="(task, index) in paginatedData" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ task.taskName }}</td>
          <td>{{ moment(task.date).locale("fa").format("jYYYY/jMM/jDD") }}</td>
          <td>
            <div class="select">
              <select
                @change="changeStatusHandler(index, $event)"
                :value="task.status"
              >
                <option
                  v-for="statusName in statusAccess(task.status)"
                  :value="statusName"
                >
                  {{ statusName }}
                </option>
              </select>
            </div>
          </td>
          <td>
            <p class="buttons">
              <button @click="openDeleteModalHandler(index)" class="button">
                <span class="icon">
                  <img :src="binImage" />
                </span>
              </button>
              <button
                @click="openEditModalHandler(index)"
                class="button is-primary"
              >
                <span class="icon">
                  <img :src="editImage" />
                </span>
              </button>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import jMoment from "jalali-moment";
import BinImg from "../../static/recycle-bin.png";
import PencilImg from "../../static/pencil.png";
import { statusAccess } from "../helper";
export default {
  name: "table",
  props: ["data", "pageNumber"],
  data() {
    return {
      paginatedData: this.data.slice(0, 5),
      binImage: BinImg,
      editImage: PencilImg,
    };
  },
  methods: {
    moment: (date) => jMoment(date, "YYYY/MM/DD"),
    statusAccess: (status) => statusAccess(status),
    changeStatusHandler(index, event) {
      const statusName = event.target.value;
      console.log("statusName");
      console.log(index);
      this.$emit("changeStatusHandler", statusName, index);
    },
    openEditModalHandler(index) {
      this.$emit("openEditModalHandler", index);
    },
    openDeleteModalHandler(index) {
      this.$emit("openDeleteModalHandler", index);
    },
  },
  watch: {
    pageNumber() {
      this.paginatedData = this.data.slice(
        (this.pageNumber - 1) * 5,
        this.pageNumber * 5
      );
    },
  },
};
</script>
