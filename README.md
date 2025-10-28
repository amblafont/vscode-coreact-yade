# coreact-yade README

This extension runs the [Coreact YADE editor](https://github.com/amblafont/graph-editor-web) in a vscode tab (webview) to help mechanising commutations of categorical diagrams with the Coq proof assistant. It builds upon the coq-lsp extension.


## Mechanisation features

See https://github.com/amblafont/vscode-yade-example for an example of use.

- Displays inline diagrams and equations between composition of morphisms as diagrams
- Builds diagrammatic proofs interactively with Coq using the vscode command "Complete diagram"

## Experimental version

This extension is shipped with a version of the editor whose mechanisation features have been tested.
The last version of the editor available at https://amblafont.github.io/graph-editor/index.html can alternatively be used using the "Launch experimental YADE" command.

## Requirements

You need coq-lsp vscode extension.

## Extension Settings

None.

## Known Issues

The experimental version of YADE does not work with vscode.dev because of https://github.com/microsoft/vscode/issues/72900.

## Release Notes

### 0.0.18

Remove server implementation from the extension.

### 0.0.13

- upgrade to last version of coreact-yade
- Proofs can be arbitrary complex (tactics can be separated by ".")

### 0.0.7

Integrated YADE server.

### 0.0.6

Web extension capabilities.

### 0.0.5

No need for the desktop version of coreact-yade: it directly runs in a vscode tab.

### Initial release

Initial release of the coreact-yade  extension

