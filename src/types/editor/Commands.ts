import {  IconType } from 'react-icons/lib';
import { boldCommand, italicCommand, strikethroughCommand, linkCommand, quoteCommand, imageCommand,
  codeCommand, checkedListCommand, orderedListCommand, unorderedListCommand, headingLevel1Command } from 'react-mde';
import { MdFormatBold, MdFormatItalic,  MdStrikethroughS,  MdLink,  MdFormatQuote,  MdImage,  MdCode,  MdChecklist,
  MdFormatListNumbered, MdFormatListBulleted } from 'react-icons/md';
import { FaHeading } from 'react-icons/fa';
  
export const enum CommandNames {
  bold = 'bold',
  italic = 'italic',
  strikethrough = 'strikethrough',
  link = 'link',
  quote = 'quote',
  image = 'image',
  code = 'code',
  checkedList = 'checkedList',
  orderedList = 'orderedList',
  unorderedList = 'unorderedList',
  headingLevel1 = 'headingLevel1',
}

type CommandMap = {
  [key in keyof typeof CommandNames]: typeof boldCommand
}

export const CommandMap: CommandMap = {
  bold: boldCommand,
  italic: italicCommand,
  strikethrough: strikethroughCommand,
  link: linkCommand,
  quote: quoteCommand,
  image: imageCommand,
  code: codeCommand,
  checkedList: checkedListCommand,
  orderedList: orderedListCommand,
  unorderedList: unorderedListCommand,
  headingLevel1:  headingLevel1Command
};

export interface EditorCommand {
  command: typeof boldCommand;
  name: keyof typeof CommandNames;
  icon: IconType;
}

export const supportedCommands: EditorCommand[] = [
  {
    command: CommandMap.bold,
    name: CommandNames.bold,
    icon: MdFormatBold
  },
  {
    command: CommandMap.italic,
    name: CommandNames.italic,
    icon: MdFormatItalic
  },
  {
    command: CommandMap.strikethrough,
    name: CommandNames.strikethrough,
    icon: MdStrikethroughS
  },
  {
    command: CommandMap.link,
    name: CommandNames.link,
    icon: MdLink
  },
  {
    command: CommandMap.quote,
    name: CommandNames.quote,
    icon: MdFormatQuote
  },
  {
    command: CommandMap.image,
    name: CommandNames.image,
    icon: MdImage
  },
  {
    command: CommandMap.code,
    name: CommandNames.code,
    icon: MdCode
  },
  {
    command: CommandMap.checkedList,
    name: CommandNames.checkedList,
    icon: MdChecklist
  },
  {
    command: CommandMap.orderedList,
    name: CommandNames.orderedList,
    icon: MdFormatListNumbered
  },
  {
    command: CommandMap.unorderedList,
    name: CommandNames.unorderedList,
    icon: MdFormatListBulleted
  },
  {
    command: CommandMap.headingLevel1,
    name: CommandNames.headingLevel1,
    icon: FaHeading
  }
];