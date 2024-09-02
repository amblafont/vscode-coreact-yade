# coreact-yade README

This extension runs the [Coreact YADE editor](https://github.com/amblafont/graph-editor-web) in a vscode tab (webview) to help mechanising commutations of categorical diagrams with the Coq proof assistant. It builds upon the coq-lsp extension.

## Collaborating on the same diagram

The [Live Share extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) allows multiple users to collaborate on the same workspace. 

The present extension enables collaboration on the same diagram during live sharing. First launch the editor (using the "Launch YADE" command), then join or create a liveshare session.
If you are hosting the session, the extension will automatically launch the YADE server and prompt you to share it on the port 8080 (moreover, the editor will automatically connect to the server).

## Mechanisation features

See https://github.com/amblafont/vscode-yade-example for an example of use.

- Displays inline diagrams and equations between composition of morphisms as diagrams
- Builds diagrammatic proofs interactively with Coq using the vscode command "Complete diagram"

## Experimental version

This extension is shipped with a version of the editor whose mechanisation features have been tested.
The last version of the editor available at https://amblafont.github.io/graph-editor-experimental/index.html can alternatively be used using the "Launch experimental YADE" command.

## Requirements

You need coq-lsp vscode extension.

## Extension Settings

None.

## Known Issues

None.

## Release Notes

### 0.0.7

Integrated YADE server.

### 0.0.6

Web extension capabilities.

### 0.0.5

No need for the desktop version of coreact-yade: it directly runs in a vscode tab.

### Initial release

Initial release of the coreact-yade  extension


