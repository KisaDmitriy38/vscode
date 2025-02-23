/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import 'vs/css!./media/singleeditortabscontrol';
import { EditorInput } from 'vs/workbench/common/editor/editorInput';
import { EditorTabsControl, IToolbarActions } from 'vs/workbench/browser/parts/editor/editorTabsControl';
import { Dimension } from 'vs/base/browser/dom';
import { IEditorTitleControlDimensions } from 'vs/workbench/browser/parts/editor/editorTitleControl';

export class NoEditorTabsControl extends EditorTabsControl {

	protected prepareEditorActions(editorActions: IToolbarActions): IToolbarActions {
		return {
			primary: [],
			secondary: []
		};
	}

	openEditor(editor: EditorInput): boolean {
		return false;
	}

	openEditors(editors: EditorInput[]): boolean {
		return false;
	}

	beforeCloseEditor(editor: EditorInput): void { }

	closeEditor(editor: EditorInput): void { }

	closeEditors(editors: EditorInput[]): void { }

	moveEditor(editor: EditorInput, fromIndex: number, targetIndex: number): void { }

	pinEditor(editor: EditorInput): void { }

	stickEditor(editor: EditorInput): void { }

	unstickEditor(editor: EditorInput): void { }

	setActive(isActive: boolean): void { }

	updateEditorLabel(editor: EditorInput): void { }

	updateEditorDirty(editor: EditorInput): void { }

	getHeight(): number {
		return 0;
	}

	layout(dimensions: IEditorTitleControlDimensions): Dimension {
		return new Dimension(dimensions.container.width, this.getHeight());
	}
}
