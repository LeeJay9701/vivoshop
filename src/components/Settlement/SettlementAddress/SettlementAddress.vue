<template>
  <div>
    <van-contact-card :type="cardType"
                      :name="currentContact.name"
                      :tel="currentContact.tel"
                      @click="showList = true" />
    <van-contact-card type="edit"
                      :name="currentContact.name"
                      :tel="currentContact.tel"
                      title="123"
                      :editable="true" />
    <van-contact-card type="edit"
                      name="张三"
                      a="张三"
                      title="123"
                      icon='location'
                      lable="12"
                      
                      tel="13000000000"

                      :editable="false" />
  </div>
</template>
<script>
import Vue from 'vue';
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);

export default {
  name: 'SettlementAddress',
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.van-contact-card
  margin-top 46px
</style>