import PropTypes from "prop-types";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "./react-draft-wysiwyg.css";

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: ""
  };

  render() {
    const { forID, value, onChange, classNameWrapper } = this.props;
    //editorState={editorState}
    return (
      <Editor
        id={forID}
        toolbarClassName="toolbarClassName"
        wrapperClassName={classNameWrapper}
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}
