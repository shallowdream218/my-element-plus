<template>
  <!-- <el-button :plain="true" @click="open">Show Mymessage</el-button>
  <el-button :plain="true" @click="open2">Show message</el-button> -->
  <div>
    <button :plain="true" @click="open">info</button>
    <button :plain="true" @click="open2">success</button>
    <button :plain="true" @click="open3">warning</button>
    <button :plain="true" @click="open4">error</button>
    <hr>
    </hr>
    <button :plain="true" @click="open51">info</button>
    <button :plain="true" @click="open52">success</button>
    <button :plain="true" @click="open53">warning</button>
    <button :plain="true" @click="open54">error</button>
    <el-icon :size="20" color="#409efc">
      <SuccessFilled />
    </el-icon>
    <my-icon :size="20" color="red">
      <SuccessFilled />
    </my-icon>
    <button @click="me">显示/隐藏消息</button>
    <transition name='test'>
      <div v-show="visible" class="my-message__test" ref='r'>
        my test
      </div>
    </transition>
    <hr>
    </hr>
    <el-badge :value="10" :max="5" type="warning">
      <el-button>comments</el-button>
    </el-badge>
    <hr>
    <MyBadge :value="10" :max="5" type="warning">
      <el-button>comments</el-button>
    </MyBadge>
  </div>



  <!-- <el-button :plain="true" @click="openVn">VNode</el-button> -->
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElMessage } from 'element-plus'
import MyOwnMessage from '../components/message';
import { MyBadge } from '@my/components/badge';
const info = ref('<strong>This is <i>HTML</i> string</strong>')
const open = () => {
  MyOwnMessage({ message: 'This is a Message.', duration: 2000, type: 'info', grouping: true })
}
const open2 = () => {
  MyOwnMessage({ message: 'This is a Message.', duration: 0, type: 'success' })
}
const open3 = () => {
  MyOwnMessage({ message: 'This is a Message.', duration: 3000, type: 'warning' })
}
const open4 = () => {
  MyOwnMessage({ message: 'This is a Message.', duration: 3000, type: 'error' })
}
const open51 = () => {
  ElMessage({ message: 'This is a Message.', duration: 2000, type: 'info', grouping: true })
}
const open52 = () => {
  ElMessage({ message: 'This is a Message.', duration: 0, type: 'success' })
}
const open53 = () => {
  ElMessage({ message: 'This is a Message.', duration: 0, type: "warning", offset: 100 })
}
const open54 = () => {
  ElMessage({ message: 'This is a Message.', duration: 0, type: "error", offset: 100 })
}
const r = ref<HTMLDivElement>()
const me = () => {
  visible.value = true
  if (r.value) {
    console.log('here');

    r.value.style.top = '500px';
  }
  // r.value?.style.top = '50px';
}
const visible = ref(false)
const openVn = () => {
  ElMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

</script>
<style lang="scss">
.my-message__test {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  top: 20px;
  position: fixed;
  transform: translate(-50%, -100%);
}
</style>