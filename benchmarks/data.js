window.BENCHMARK_DATA = {
  "lastUpdate": 1781832460882,
  "repoUrl": "https://github.com/GabrielleMi/dev-vault",
  "entries": {
    "Vitest Performance Run": [
      {
        "commit": {
          "author": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "committer": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "id": "080e0927e28e05ee174b6aa6cada5fcb9290f25d",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/080e0927e28e05ee174b6aa6cada5fcb9290f25d"
        },
        "date": 1781784758400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7598891,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 6148012,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6314950,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5940611,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6556300,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 13426289,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 23779,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 19242,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 13123,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 18196,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 245,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 246,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 590,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 116,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16619,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8657,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 12545,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 14108,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 120602,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 95,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 39,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 93,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 14254,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 10881,
            "unit": "hz"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "committer": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "id": "080e0927e28e05ee174b6aa6cada5fcb9290f25d",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/080e0927e28e05ee174b6aa6cada5fcb9290f25d"
        },
        "date": 1781784920549,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7603828,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 5639670,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6014091,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 4968523,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6373130,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 13694134,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 21146,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 17532,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 12382,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 16027,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 216,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 218,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 567,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 107,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 15527,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8779,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 13651,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 13500,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 131678,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 94,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 42,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 92,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 13673,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 9105,
            "unit": "hz"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "committer": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "id": "d265e5ccfec185b7064681df7f7525fe01c3f73d",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/d265e5ccfec185b7064681df7f7525fe01c3f73d"
        },
        "date": 1781832172151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7395396,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 5627786,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 5849142,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5271681,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 5991701,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 11240116,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 18103,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 15388,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 11072,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 13513,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 187,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 191,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 607,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 104,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16927,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 9015,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 13610,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 14064,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 128117,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path) [2]",
            "value": 95,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys) [2]",
            "value": 41,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig) [2]",
            "value": 92,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 14401,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 10530,
            "unit": "hz"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "committer": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "id": "d9505b0f108d37b063f45440d0c6f4ad9cbdfca6",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/d9505b0f108d37b063f45440d0c6f4ad9cbdfca6"
        },
        "date": 1781832460636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Simple access (1 level)",
            "value": 6887473,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Deep nested path (4 levels)",
            "value": 4992644,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Array access",
            "value": 5441694,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Deep complex mixed path",
            "value": 5061071,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Early failure (Non-existent path in the middle)",
            "value": 5503053,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/object.bench.ts > group-1 > Edge case (Empty string key)",
            "value": 10725922,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-1 > Exact Match - Simple key",
            "value": 17044,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-1 > Exact Match - Deep path (3 levels)",
            "value": 14810,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-1 > Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 10504,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-1 > Multi-term Search - Exact match",
            "value": 13071,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-2 > Exact Match - Linear scan flat key",
            "value": 175,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-2 > Exact Match - Linear scan deep path",
            "value": 181,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-2 > Case Sensitive vs Normalized scan",
            "value": 498,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/search.bench.ts > group-2 > Fuzzy Match - High execution cost scale",
            "value": 96,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-1 > Simple property sort (String path)",
            "value": 14788,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-1 > Multi-criteria sort (Multi-keys)",
            "value": 8837,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-1 > Deep nested path sort (Deep path)",
            "value": 12866,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-1 > Specific key configuration sort (SortKeyConfig)",
            "value": 12977,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-1 > Custom callback function sort (SortKeyFn)",
            "value": 113934,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-2 > Simple property sort (String path)",
            "value": 91,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-2 > Multi-criteria sort (Multi-keys)",
            "value": 40,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-2 > Specific key configuration sort (SortKeyConfig)",
            "value": 88,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-3 > Without global options (Uses default cache)",
            "value": 13267,
            "unit": "hz"
          },
          {
            "name": "/home/runner/work/dev-vault/dev-vault/packages/core/test/sort.bench.ts > group-3 > With custom sensitivity options (Cache key generation)",
            "value": 9855,
            "unit": "hz"
          }
        ]
      }
    ]
  }
}