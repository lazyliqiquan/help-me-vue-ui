import {defineStore} from "pinia";
import {EditModel} from "../types/edit/model";
import {InfoModel} from "../types/info/info";

// 一个appStore就够了，把逻辑放到types里面,从而达到ui和逻辑分离
export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      edit: new EditModel(),
      info: new InfoModel()
    }
  },
})
