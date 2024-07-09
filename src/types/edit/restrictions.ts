export class EditRestrictions {
  remainReward: number = 0
  maxDocumentWords: number = 0
  maxPicturesSize: number = 0

  parse(restrictions: EditRestrictions) {
    this.remainReward = restrictions.remainReward
    this.maxDocumentWords = restrictions.maxDocumentWords
    this.maxPicturesSize = restrictions.maxPicturesSize
  }
}
