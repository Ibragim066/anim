import Collapse from './Collapse/Collapse';
import Modal from './Callback-Chat/Modal';

const collapse = new Collapse(document.getElementById('collapse-container'));
const modal = new Modal(document.getElementById('chat-container'));

collapse.init();
modal.init();