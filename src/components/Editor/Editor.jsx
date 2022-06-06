import React, { useCallback, useRef } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../constants";

const ReactEditorJS = createReactEditorJS();

const Editor = (props) => {
  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    return savedData.blocks
  }, []);

  return (
    <>
      <ReactEditorJS
        onChange={async () => {
          const response = await handleSave()
          props.field.onChange(response)
        }}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
      />
    </>
  );
};

export default Editor;
