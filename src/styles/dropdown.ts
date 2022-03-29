import {css} from 'lit';
export const dropdown = css`
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.active, .accordion:hover {
  background-color: #ccc;
}
.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordion:after {
  content: '+'; 
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}
.active:after {
  content: "-"; 
}
`;
