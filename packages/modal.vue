<template>
    <transition name="fade">
        <div @click="$emit('update:visible', false)" class="modal-bg" v-show="visible">
            <div @click.stop class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span @click="$emit('update:visible', false)" aria-hidden="true">&times;</span>
                        </button>
                        <slot name="title">
                            <h4 class="modal-title">{{title}}</h4>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </transition>
</template>
<script>
export default {
  name: "OModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Modal title"
    }
  },
  watch: {
    visible(val) {
      console.log(val);
    }
  },
  methods: {}
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter .modal-dialog,
.fade-leave-active .modal-dialog {
  transform: translateY(-40px);
}
.modal-dialog {
  transition: all 0.3s linear 0s;
}
.modal-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

