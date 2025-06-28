import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"
import type {PathInformation} from "#~export/PathInformation.ts"

import {lstat} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {lstat} from "@anio-software/pkg-private.node-consistent-fs/sync"

import {nodeStatsToInfoObject} from "#~src/nodeStatsToInfoObject.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string
): Promise<PathInformation> {
//>): PathInformation {
	return nodeStatsToInfoObject(
		await lstat(path)
//>		lstat(path)
	)
}
