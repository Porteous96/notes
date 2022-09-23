import { boldCommand, italicCommand, strikethroughCommand, linkCommand, quoteCommand, imageCommand, codeBlockCommand,
  codeCommand, checkedListCommand, orderedListCommand, unorderedListCommand, headingLevel1Command, headingLevel2Command,
  headingLevel3Command, headingLevel4Command, headingLevel5Command, headingLevel6Command } from 'react-mde';

export const enum Commands {
  bold = 'bold',
  italic = 'italic',
  strikethrough = 'strikethrough',
  link = 'link',
  quote = 'quote',
  image = 'image',
  codeBlock = 'codeBlock',
  code = 'code',
  checkedList = 'checkedList',
  orderedList = 'orderedList',
  unorderedList = 'unorderedList',
  headingLevel1 = 'headingLevel1',
  headingLevel2 = 'headingLevel2',
  headingLevel3 = 'headingLevel3',
  headingLevel4 = 'headingLevel4',
  headingLevel5 = 'headingLevel5',
  headingLevel6 = 'headingLevel6'
}

export type Command = typeof boldCommand;

type CommandMap = {
  [key in keyof typeof Commands]: Command
}


export const commandMap: CommandMap = {
  bold: boldCommand,
  italic: italicCommand,
  strikethrough: strikethroughCommand,
  link: linkCommand,
  quote: quoteCommand,
  image: imageCommand,
  codeBlock: codeBlockCommand,
  code: codeCommand,
  checkedList: checkedListCommand,
  orderedList: orderedListCommand,
  unorderedList: unorderedListCommand,
  headingLevel1: headingLevel1Command,
  headingLevel2: headingLevel2Command,
  headingLevel3: headingLevel3Command,
  headingLevel4: headingLevel4Command,
  headingLevel5: headingLevel5Command,
  headingLevel6: headingLevel6Command
};
