import Quill from "quill";

export class EditConfig {
  quill: Quill = null
  readOnly: boolean = false
  currentPicturesSize: number = 0
  currentDocumentWords: number = 0
  activeEditDetail: boolean = false

//   methods
  switchReadOnly() {
    this.quill.enable(this.readOnly)
    this.readOnly = !this.readOnly
  }
}
