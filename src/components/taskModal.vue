<template>
  <div :class="[{ 'is-active': modalStatus }, 'modal']">
    <!-- <div class="is-active modal"> -->
    <div @click="closeModalHandler" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ isEdit ? "Edit Task" : "Add Task" }}</p>
        <button
          @click="closeModalHandler"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <div class="field">
          <div class="field-label is-normal">
            <label class="label has-text-left">Title</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Task Title"
                  :value="isEdit ? data.taskName : title"
                  @change="
                    (event) => {
                      title = event.target.value;
                    }
                  "
                />
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="field-label is-normal">
            <label class="label has-text-left">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <textarea
                  class="textarea is-primary mt-2"
                  placeholder="Task Description"
                  :value="isEdit ? data.description : description"
                  @change="
                    (event) => {
                      description = event.target.value;
                    }
                  "
                ></textarea>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          @click="isEdit ? editTaskHandler() : setTaskHandler()"
          class="button is-success"
        >
          {{ isEdit ? "Save changes" : "Add Task" }}
        </button>
        <button @click="closeModalHandler" class="button">Cancel</button>
      </footer>
    </div>
  </div>
  <!-- <div>salam</div> -->
</template>
<script>
export default {
  name: "taskModal",
  props: ["modalStatus", "isEdit", "data", "index"],
  data() {
    return {
      description: "",
      title: "",
    };
  },
  methods: {
    closeModalHandler() {
      this.$emit("closeModalHandler");
    },
    setTaskHandler() {
      const date = new Date();
      console.log("setTaskHandler");
      this.$emit(
        "setTaskHandler",
        this.title,
        this.description,
        date,
        this.isEdit
      );
      this.closeModalHandler();
    },
    editTaskHandler() {
      console.log("editTaskHandler");
      console.log(this.data);
      console.log("editTaskHandler");
      editedData = { ...this.data };
      editedData.taskName = this.title;
      editedData.description = this.description;
      console.log(editedData);
      console.log("editedData");
      this.$emit("editTaskHandler", editedData, this.index);
      this.closeModalHandler();
    },
  },
  //   watch: {
  //     data() {
  //       console.log("yallah");
  //     },
  //   },
};
</script>
<!-- <style>
.max-width{
    max-width: 300px;
}
</style> -->
