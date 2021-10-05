import { html } from 'lit';
import '../dld-btn.js';

export default {
  title: 'DldBtn',
  component: 'dld-btn',
  argTypes: {
    title: { control: 'text' },
    open: {control: 'boolean'},
    icon: {control: 'text'},
    disabled: {control: 'boolean'},
    dark: {control: 'boolean'},
    audio: { control: 'boolean' }
  },
};

function Template({ 
  title = 'Download VSCode',
  disabled = false,
  dark = false,
  icon = 'file-download',
  slot = '',
  audio = true,
}) 
{
  
  
  return html`
    <dld-btn
    .title=${title}
    .disabled=${disabled}
    .dark=${dark}
    .icon=${icon}
    .audio=${audio}
      >
      ${slot}
    </dld-btn>
  `;
}

export const Regular = Template.bind({});
