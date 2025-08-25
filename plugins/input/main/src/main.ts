import { defineAction, defineTrigger, onLoad, onUnload, definePlugin, Plugin } from "castmate-core"

import { setupKeyboard } from "./keyboard"
import { InputInterface } from "castmate-plugin-input-native"

import { setupMouse } from "./mouse"

let plugin: Plugin | undefined
if (process.platform === "win32") {
	plugin = definePlugin(
		{
			id: "input",
			name: "Input",
			description: "Input!",
			icon: "mdi mdi-keyboard",
			color: "#826262",
			supportedPlatforms: ["win32"],
		},
		() => {
			const inputInterface = new InputInterface()

			onLoad(() => {
				inputInterface.startEvents()
			})

			onUnload(() => {
				inputInterface.stopEvents()
			})

			setupKeyboard(inputInterface)
			setupMouse(inputInterface)
		}
	)
}

export default plugin
