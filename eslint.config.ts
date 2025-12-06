import { eslintConfig } from "eslint-config-un";

export default eslintConfig({
	configs: {
		import: {
			overrides: {
				"import/order": "off", // Conflicts with `perfectionist/sort-imports`
			},
		},
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
			delimitersStyle: {
				emphasis: {
					emphasis: "_",
					strong: "**",
				},
			},
			enforceCasing: "Title Case",
			overrides: {
				"markdown-preferences/link-title-style": "off", // Conflicts with Prettier
			},
		},
		noStylisticRules: {
			enableRules: {
				disableAllOtherRules: true,
				rules: true,
			},
		},
		perfectionist: {
			forceSeverity: "error",
			settings: {
				partitionByComment: true,
				type: "natural",
			},
		},
		stylistic: {
			overrides: {
				"@stylistic/padding-line-between-statements": "off", // Conflicts with `perfectionist/sort-imports`
			},
		},
		ts: {
			allowDefaultProject: ["*.config.*s", "lib/bin/pjv.mjs"],
		},
		vitest: {
			overrides: {
				"vitest/prefer-describe-function-title": "error",
				"vitest/prefer-strict-equal": "off",
			},
			paddingAround: {
				expect: false,
			},
			settings: {
				typecheck: true,
			},
			testDefinitionKeyword: false,
			vitestGlobalsImporting: "enforce",
		},
		yaml: {
			overrides: {
				"yml/quotes": "off", // Conflicts with Prettier
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
