import { eslintConfig } from "eslint-config-un";

export default eslintConfig({
	configs: {
		js: {
			overrides: {
				"logical-assignment-operators": [
					"error",
					"always",
					{ enforceForIfStatements: true },
				],
			},
		},
		markdownPreferences: {
			enforceCasing: "Title Case",
		},
		perfectionist: {
			forceSeverity: "error",
			settings: {
				partitionByComment: true,
				type: "natural",
			},
		},
		ts: {
			allowDefaultProject: ["*.config.*s", "lib/bin/pjv.mjs"],
		},
		vitest: {
			vitestGlobalsImporting: "enforce",
			testDefinitionKeyword: false,
			paddingAround: {
				expect: false,
			},
			overrides: {
				"vitest/prefer-describe-function-title": "error",
				"vitest/prefer-strict-equal": "off",
			},
			settings: {
				typecheck: true,
			},
		},
		yaml: {
			overrides: {
				"yml/sort-sequence-values": [
					"error",
					{ order: { type: "asc" }, pathPattern: "^.*$" },
				],
			},
		},
		// False positives:
		rxjs: false,
		youDontNeedLodashUnderscore: false,
		zod: false,
	},
	ignores: [
		"**/*.snap",
		"README.md/*.js",
		"coverage",
		"lib",
		"node_modules",
		"pnpm-lock.yaml",
	],
	linterOptionsReportUnusedDisableDirectives: "error",
});
