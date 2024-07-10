export class EditRestrictions {
  remainReward: number = 0
  maxDocumentWords: number = 10000
  maxPicturesSize: number = 10

  parse(restrictions: EditRestrictions) {
    this.remainReward = restrictions.remainReward
    this.maxDocumentWords = restrictions.maxDocumentWords
    this.maxPicturesSize = restrictions.maxPicturesSize
  }
}
