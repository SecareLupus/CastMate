import { defineAction, defineTrigger, onLoad, onUnload, definePlugin, Plugin } from "castmate-core"
import { setupPowershell } from "./powershell"
import { setupProcesses, isProcessRunning } from "./processes"

export { isProcessRunning }

let plugin: Plugin | undefined
if (process.platform === "win32") {
	plugin = definePlugin(
		{
			id: "os",
			name: "OS",
			description: "Operating System",
			icon: "mdi mdi-laptop",
			color: "#CC9B78",
			supportedPlatforms: ["win32"],
		},
		() => {
			//Plugin Intiialization
			setupPowershell()
			setupProcesses()
		}
	)
}

export default plugin
