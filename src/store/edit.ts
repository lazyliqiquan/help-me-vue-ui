import {defineStore} from "pinia";
import {EditModel} from "../types/edit";


export const useEditStore = defineStore('editStore', {
  state: () => {
    return {
      edit: new EditModel(),
    }
  },
})
