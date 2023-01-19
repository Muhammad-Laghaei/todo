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
        <button @click="setTaskHandler" class="button is-success">
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
  props: ["modalStatus", "isEdit"],
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
      this.$emit(
        "setTaskHandler",
        this.title,
        this.description,
        date,
        this.isEdit
      );
      this.closeModalHandler();
    },
  },
};
</script>
