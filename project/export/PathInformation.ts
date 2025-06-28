import type {PathPermissions} from "./PathPermissions.ts"

export type PathInformation = {
	fileSize: number
	fileCreated: number
	fileModified: number

	sticky: boolean
	sGID: boolean
	sUID: boolean

	rawMode: number

	permissions: PathPermissions
}
