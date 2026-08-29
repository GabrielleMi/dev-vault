window.BENCHMARK_DATA = {
  "lastUpdate": 1787963678203,
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
          "id": "4deeb4da0c17bfa263b4916caa20c84be9be75fa",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/4deeb4da0c17bfa263b4916caa20c84be9be75fa"
        },
        "date": 1781832717286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Simple access (1 level)",
            "value": 6780695,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Deep nested path (4 levels)",
            "value": 5066891,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Array access",
            "value": 5517405,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Deep complex mixed path",
            "value": 5069182,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Early failure (Non-existent path in the middle)",
            "value": 5550499,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry - Performance Suite > Edge case (Empty string key)",
            "value": 10645268,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Small Dataset (100 items) > Exact Match - Simple key",
            "value": 17063,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Small Dataset (100 items) > Exact Match - Deep path (3 levels)",
            "value": 15134,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Small Dataset (100 items) > Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 10608,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Small Dataset (100 items) > Multi-term Search - Exact match",
            "value": 13302,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Large Dataset (10,000 items) > Exact Match - Linear scan flat key",
            "value": 177,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Large Dataset (10,000 items) > Exact Match - Linear scan deep path",
            "value": 185,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Large Dataset (10,000 items) > Case Sensitive vs Normalized scan",
            "value": 496,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > Search - Large Dataset (10,000 items) > Fuzzy Match - High execution cost scale",
            "value": 98,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Small Dataset (100 items) > Simple property sort (String path)",
            "value": 15255,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Small Dataset (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 8846,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Small Dataset (100 items) > Deep nested path sort (Deep path)",
            "value": 13626,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Small Dataset (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 11591,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Small Dataset (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117968,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Large Dataset (10,000 items) > Simple property sort (String path)",
            "value": 92,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Large Dataset (10,000 items) > Multi-criteria sort (Multi-keys)",
            "value": 41,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Large Dataset (10,000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 89,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Cache & Collator Performance > Without global options (Uses default cache)",
            "value": 13634,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > Sort - Cache & Collator Performance > With custom sensitivity options (Cache key generation)",
            "value": 9958,
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
          "id": "0cac04f2776ac7e4a45d4986be330f0258bebdd6",
          "message": "feat(core): export isDefined utility function",
          "timestamp": "2026-06-28T23:34:17Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/40/commits/0cac04f2776ac7e4a45d4986be330f0258bebdd6"
        },
        "date": 1783727145639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6613657,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5230347,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5334974,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4754225,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5598011,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10840100,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 56435,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 35001,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23240,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 57142,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 80648,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 49864,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 503,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 354,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 218,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 536,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 791,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 466,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25352,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34367,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97462,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24707,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117203,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15330,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15169,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 160,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 235,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 579,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 165,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 730,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 104,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 104,
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
          "id": "a6ee021a07668bf54b47b2d69fbad6c84802fdf2",
          "message": "feat(time): add convertTime wrapper",
          "timestamp": "2026-07-10T23:48:10Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/42/commits/a6ee021a07668bf54b47b2d69fbad6c84802fdf2"
        },
        "date": 1783786815450,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 9016200,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 6364830,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 6983098,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6087585,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 7171116,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 13196638,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 77527,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 46811,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 31874,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 69371,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 114140,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 70224,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 668,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 454,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 304,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 699,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1109,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 659,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 28647,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 40975,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 113207,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 28424,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 150003,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17657,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17356,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 183,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 273,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 683,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 177,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 988,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 121,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 121,
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
          "id": "0dbaba1eb2d6bbd64017b2718bcf18836499cfd3",
          "message": "chore(deps-dev): bump @changesets/cli from 2.31.0 to 2.31.1",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/44/commits/0dbaba1eb2d6bbd64017b2718bcf18836499cfd3"
        },
        "date": 1784334869515,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6592518,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5165453,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5303759,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4824763,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5554109,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10023920,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 64865,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 33943,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23467,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 54869,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 81537,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 53387,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 604,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 345,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 220,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 506,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 768,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 498,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25302,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34017,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 96064,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24652,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 115725,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15222,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15007,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 160,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 224,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 558,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 162,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 736,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 103,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 103,
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
          "id": "a516671c5b9ca00bcf1069afaaf7c61518b4718b",
          "message": "chore(deps-dev): bump eslint-plugin-jsdoc from 63.0.13 to 63.0.14",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/45/commits/a516671c5b9ca00bcf1069afaaf7c61518b4718b"
        },
        "date": 1784334885489,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 8912021,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 6037116,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 6737333,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6059303,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 6881768,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 12363589,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 90016,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 47391,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 31806,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 70874,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 105258,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 73787,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 716,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 469,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 294,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 711,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1089,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 697,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 29410,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 41603,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 113037,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 29023,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 149163,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 18185,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17079,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 189,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 278,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 697,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 189,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 1025,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 124,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 122,
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
          "id": "d7593a1c3ff36f9bbd4ac55aae0b2011a918fab1",
          "message": "chore(deps-dev): bump typescript-eslint from 8.63.0 to 8.64.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/46/commits/d7593a1c3ff36f9bbd4ac55aae0b2011a918fab1"
        },
        "date": 1784334903748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6816049,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 4967880,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5104168,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4715934,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5530628,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10523108,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 61453,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 35040,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 24646,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 57371,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 90287,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 56144,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 511,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 352,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 224,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 543,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 807,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 505,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25288,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34319,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 96750,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24496,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 116764,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15251,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15056,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 231,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 577,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 165,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 724,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 105,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 105,
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
          "id": "e5b802acbe8b0e6042005ab8a1ba5965ee34135c",
          "message": "chore(deps-dev): bump concurrently from 10.0.3 to 10.0.4",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/47/commits/e5b802acbe8b0e6042005ab8a1ba5965ee34135c"
        },
        "date": 1784939654634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6714676,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5301701,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5380410,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4803068,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5889436,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10715652,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 60526,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 32944,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 24343,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 57446,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 88801,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 57985,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 521,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 327,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 223,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 543,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 828,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 522,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 23014,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34496,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 96606,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24570,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 116201,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15224,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 14938,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 162,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 232,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 575,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 165,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 721,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 104,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 104,
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
          "id": "72808916ca51426b3ec08536e81a9be1df7d21b1",
          "message": "chore(deps-dev): bump eslint from 10.7.0 to 10.8.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/48/commits/72808916ca51426b3ec08536e81a9be1df7d21b1"
        },
        "date": 1784939674366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6771581,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5140622,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5226855,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4654103,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5754682,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10592133,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 59594,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 36783,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23994,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 59221,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 86982,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 55037,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 521,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 380,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 222,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 556,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 841,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 485,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25326,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34585,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 98021,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24781,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117721,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15335,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15011,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 234,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 579,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 165,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 732,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 104,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 104,
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
          "id": "f98c8c009827ec51302272e2c5389cc104177a8d",
          "message": "chore(deps-dev): bump typescript-eslint from 8.63.0 to 8.65.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/49/commits/f98c8c009827ec51302272e2c5389cc104177a8d"
        },
        "date": 1784939686921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 9772154,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 6874359,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 7425705,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6716238,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 7711924,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 14616473,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 85802,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 49989,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 34860,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 78601,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 114635,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 72676,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 743,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 501,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 325,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 770,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1155,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 680,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 31592,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 45245,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 127273,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 31108,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 162204,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 18972,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 18915,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 198,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 294,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 755,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 202,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 1078,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 134,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 133,
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
          "id": "43ed6871195d3457eae11011f140a6258364b8cb",
          "message": "chore(deps-dev): bump eslint-plugin-jsdoc from 63.0.13 to 63.2.2",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/50/commits/43ed6871195d3457eae11011f140a6258364b8cb"
        },
        "date": 1784939705226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 8982807,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 6468688,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 6960469,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6382132,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 7312054,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 13569093,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 88872,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 48811,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 32346,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 74767,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 111192,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 74273,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 700,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 474,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 305,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 730,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1129,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 699,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 26121,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 42115,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 119431,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 28976,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 153980,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17916,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17852,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 184,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 271,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 710,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 187,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 1017,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 123,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 123,
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
          "id": "0dc62d670205405a3d5b3360bd7a09d13307495e",
          "message": "chore(deps): bump shell-quote from 1.8.4 to 1.9.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/51/commits/0dc62d670205405a3d5b3360bd7a09d13307495e"
        },
        "date": 1785019152677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7028044,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5619531,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5813837,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5277241,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 6068504,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 9830355,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 66088,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 40502,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 27792,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 64842,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 94830,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 60227,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 591,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 396,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 252,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 619,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 924,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 562,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 26758,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 37184,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 99313,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 26327,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 113216,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17268,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 16854,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 166,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 243,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 579,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 166,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 722,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 112,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 112,
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
          "id": "71c4af158834dd1a9db70c4efb74417e2e6ecc8c",
          "message": "chore(deps-dev): bump eslint-plugin-jsdoc from 63.0.13 to 63.3.2",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/52/commits/71c4af158834dd1a9db70c4efb74417e2e6ecc8c"
        },
        "date": 1785544608578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6895054,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 4973500,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5300680,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4759634,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5601684,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10489058,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 66577,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 34735,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23470,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 56423,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 85466,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 57921,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 559,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 350,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 218,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 529,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 831,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 518,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 22368,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 33398,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 96182,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24834,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117659,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15316,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 14887,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 232,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 568,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 164,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 737,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 100,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 104,
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
          "id": "b72f70a6d857775c38500edd824e7b5d091747f8",
          "message": "chore(deps-dev): bump @types/node from 26.1.1 to 26.1.2",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/53/commits/b72f70a6d857775c38500edd824e7b5d091747f8"
        },
        "date": 1785544613336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6736805,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5178998,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5249381,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4795483,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5807129,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10611344,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 60253,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 33478,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 24800,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 58060,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 88200,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 53061,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 502,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 339,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 225,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 554,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 837,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 482,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25160,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 33781,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 96555,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24238,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117112,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15260,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 14962,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 229,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 581,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 720,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 103,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 103,
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
          "id": "39f5b0eac7a8d3f08b3a0d5874ca0c48a44cd6b1",
          "message": "chore(deps-dev): bump globals from 17.7.0 to 17.8.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/54/commits/39f5b0eac7a8d3f08b3a0d5874ca0c48a44cd6b1"
        },
        "date": 1785544625939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6722881,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5132610,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5224002,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4648849,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5714455,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10469893,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 66288,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 34493,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23540,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 56449,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 82171,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 55881,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 614,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 343,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 219,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 522,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 780,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 513,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 24664,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34208,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 94940,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24342,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117030,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15352,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15065,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 157,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 231,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 571,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 159,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 720,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 104,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 104,
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
          "id": "468ef909eccb4b1fad9433e1fc7f27532ad3b13a",
          "message": "chore(deps): bump postcss from 8.5.16 to 8.5.25",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/55/commits/468ef909eccb4b1fad9433e1fc7f27532ad3b13a"
        },
        "date": 1785645886001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6706790,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5076391,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5208879,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 4664510,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5602448,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10608297,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 61721,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 33322,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 24636,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 58001,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 87029,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 49216,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 482,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 337,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 224,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 545,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 825,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 457,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 23156,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 34579,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97166,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24506,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117660,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15075,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 14969,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 160,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 234,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 581,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 164,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 730,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 103,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 103,
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
          "id": "9c1a97ab7074ad80c860d82221cd55513c173349",
          "message": "chore(deps-dev): bump globals from 17.7.0 to 17.9.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/56/commits/9c1a97ab7074ad80c860d82221cd55513c173349"
        },
        "date": 1786149265558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7124849,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5356081,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5822299,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5267379,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5885773,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10231488,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 54286,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 38743,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 29195,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 69276,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 88733,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 61548,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 578,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 393,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 263,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 644,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 870,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 590,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 26891,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 37240,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 101504,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 26541,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 116293,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17282,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17013,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 168,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 241,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 601,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 170,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 723,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 111,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 112,
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
          "id": "32968ee79f57c43cc78c99c2f7f96fe405668b92",
          "message": "chore(deps-dev): bump eslint-plugin-jsdoc from 63.0.13 to 63.3.3",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/57/commits/32968ee79f57c43cc78c99c2f7f96fe405668b92"
        },
        "date": 1786149287675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 8663973,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5827516,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 6292038,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5849304,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 6775947,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 12576110,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 76200,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 43198,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 31167,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 67191,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 101866,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 68084,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 649,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 439,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 291,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 686,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1059,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 660,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25775,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 37662,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 110088,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 27187,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 138991,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 16730,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 16439,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 169,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 259,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 651,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 179,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 952,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 115,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 114,
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
          "id": "fb475a78f1e6b90ae72efb72bb4a0ae42a9de432",
          "message": "chore(deps-dev): bump typescript-eslint from 8.63.0 to 8.66.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/58/commits/fb475a78f1e6b90ae72efb72bb4a0ae42a9de432"
        },
        "date": 1786149308577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7218770,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5580317,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5977951,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5399200,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 6175544,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10827346,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 66034,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 39020,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 28931,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 62474,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 87387,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 62193,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 581,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 385,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 264,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 589,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 867,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 583,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 24885,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36874,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 99254,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 26435,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117042,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 16877,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 16693,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 167,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 242,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 597,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 169,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 720,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 110,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 110,
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
          "id": "6e13a5875a5d9890ea1c3be031a1e3bc3e744066",
          "message": "chore(deps-dev): bump @types/node from 26.1.1 to 26.2.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/59/commits/6e13a5875a5d9890ea1c3be031a1e3bc3e744066"
        },
        "date": 1786754080883,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6953648,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5512562,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5538715,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5024079,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5776335,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10678649,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 57523,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 38319,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23610,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 58633,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 88971,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 59404,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 478,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 386,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 220,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 562,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 859,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 557,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25552,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 35407,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97223,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24784,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117472,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 15157,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 14866,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 234,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 563,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 158,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 747,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 97,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 97,
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
          "id": "169efd646e6ff67c7f66502e7892fa637402ff10",
          "message": "chore(deps-dev): bump globals from 17.7.0 to 17.10.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/60/commits/169efd646e6ff67c7f66502e7892fa637402ff10"
        },
        "date": 1786754099100,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 10019036,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 7147370,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 7799365,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 7030199,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 8365535,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 14217324,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 100347,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 51468,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 35577,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 83242,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 127267,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 82023,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 799,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 501,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 332,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 827,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1282,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 799,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 32050,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 46277,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 127696,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 30009,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 171326,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 19962,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 19912,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 196,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 296,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 757,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 199,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 1109,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 138,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 138,
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
          "id": "500add7beeca9d9c47359d91ca439bc5a1750645",
          "message": "chore(deps-dev): bump eslint from 10.7.0 to 10.8.1",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/61/commits/500add7beeca9d9c47359d91ca439bc5a1750645"
        },
        "date": 1786754113881,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 6997139,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5182228,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5620837,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5053417,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5685565,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10773645,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 63701,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 32874,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23351,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 59069,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 87556,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 59348,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 545,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 334,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 221,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 542,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 831,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 561,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 24426,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36691,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97272,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 24133,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 116909,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 16066,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15820,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 161,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 242,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 571,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 159,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 732,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 108,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 107,
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
          "id": "02d9998af363bc628c10e3d33d163365a778949d",
          "message": "chore(deps-dev): bump typescript-eslint from 8.63.0 to 8.67.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/62/commits/02d9998af363bc628c10e3d33d163365a778949d"
        },
        "date": 1786754118805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 9388966,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 7500964,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 7781413,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 7069996,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 8063189,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 13628320,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 82323,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 48874,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 37439,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 86555,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 111566,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 77255,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 737,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 504,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 340,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 826,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1104,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 741,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 34264,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 46950,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 123144,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 34189,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 149108,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 22523,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 22210,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 213,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 308,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 760,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 216,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 932,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 145,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 145,
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
          "id": "9c3ffaea0f6e48268477f5f0e95bc362b9afd9cd",
          "message": "chore(deps-dev): bump globals from 17.7.0 to 17.11.0",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/63/commits/9c3ffaea0f6e48268477f5f0e95bc362b9afd9cd"
        },
        "date": 1787358905350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 9559399,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 7486658,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 7736561,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6843679,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 8175885,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 14280042,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 83987,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 49457,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 33867,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 73118,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 124817,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 79662,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 740,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 478,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 314,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 761,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1251,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 725,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 30889,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 44059,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 120691,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 28797,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 156408,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 19430,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 18514,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 182,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 278,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 726,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 178,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 1019,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 133,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 132,
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
          "id": "d852a7c5f417bf9c1e0c6608ef8225409368cf6c",
          "message": "chore(deps-dev): bump concurrently from 10.0.3 to 10.0.5",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/64/commits/d852a7c5f417bf9c1e0c6608ef8225409368cf6c"
        },
        "date": 1787358910272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7023802,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5106207,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5462345,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5014492,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5495459,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10747323,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 56896,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 34345,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 23641,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 55611,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 90395,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 52038,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 499,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 345,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 213,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 529,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 873,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 465,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25322,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36523,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97757,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 23987,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 117043,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 16138,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 15881,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 164,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 244,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 577,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 159,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 748,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 107,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 108,
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
          "id": "9030c1f18235b4a8c61d943e60d820f611286262",
          "message": "chore(deps-dev): bump @vitest/coverage-v8 from 4.1.10 to 4.1.11",
          "timestamp": "2026-07-11T17:17:38Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/65/commits/9030c1f18235b4a8c61d943e60d820f611286262"
        },
        "date": 1787358924090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7187570,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5707037,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5949900,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5245007,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 6029562,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10594975,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 64131,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 38634,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 28766,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 65712,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 89745,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 58320,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 588,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 403,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 252,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 622,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 876,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 550,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 26467,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36235,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 99062,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 26227,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 116687,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17212,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 16903,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 166,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 241,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 590,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 167,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 717,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 113,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 113,
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
          "id": "ccfab80f8c862307c35236a8a9f016cc6448a1f2",
          "message": "feat(core): add number utility fn",
          "timestamp": "2026-08-22T18:45:12Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/66/commits/ccfab80f8c862307c35236a8a9f016cc6448a1f2"
        },
        "date": 1787425530586,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 9092397,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 7154907,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 7560806,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 6900280,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 7661351,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 13632139,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 94400,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 51430,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 36958,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 88590,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 122793,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 78410,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 823,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 498,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 343,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 854,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 1209,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 749,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 33708,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 47142,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 126122,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 32863,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 144586,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 22407,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 21924,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 210,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 311,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 764,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 215,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 923,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 146,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 146,
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
          "id": "a015fcce20e806cb9ad2668343031b0b2b4250fc",
          "message": "chore(deps-dev): bump eslint from 10.9.0 to 10.9.1",
          "timestamp": "2026-08-22T19:09:53Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/67/commits/a015fcce20e806cb9ad2668343031b0b2b4250fc"
        },
        "date": 1787963660978,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7069617,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5542686,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5850482,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5308482,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5925954,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 10256259,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 65750,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 38685,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 28807,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 64550,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 88358,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 61643,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 571,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 386,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 257,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 625,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 871,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 558,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 24432,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36636,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 99220,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 25935,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 112898,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17628,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17211,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 166,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 230,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 582,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 164,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 717,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 112,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 113,
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
          "id": "fa364fe68490cc3768d3ac0d2fd5895ac34f3a90",
          "message": "chore(deps-dev): bump typescript-eslint from 8.67.0 to 8.68.0",
          "timestamp": "2026-08-22T19:09:53Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/68/commits/fa364fe68490cc3768d3ac0d2fd5895ac34f3a90"
        },
        "date": 1787963677674,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "test/object.bench.ts > getEntry() > Simple access (1 level)",
            "value": 7019877,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep nested path (4 levels)",
            "value": 5268788,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Array access",
            "value": 5733693,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Deep complex mixed path",
            "value": 5086715,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Early failure (Non-existent path in the middle)",
            "value": 5645571,
            "unit": "hz"
          },
          {
            "name": "test/object.bench.ts > getEntry() > Edge case (Empty string key)",
            "value": 9644654,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Simple key",
            "value": 65550,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Exact Match - Deep path (3 levels)",
            "value": 39769,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Fuzzy Match - Threshold 0.8",
            "value": 27116,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Multi-term Search - Exact match",
            "value": 65353,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Case Sensitive scan",
            "value": 89130,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 1 (100 items) > Normalized scan",
            "value": 59201,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Simple key",
            "value": 576,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Exact Match - Deep path (3 levels)",
            "value": 407,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Fuzzy Match - Threshold 0.8",
            "value": 250,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Multi-term Search - Exact match",
            "value": 623,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Case Sensitive scan",
            "value": 874,
            "unit": "hz"
          },
          {
            "name": "test/search.bench.ts > search() - Dataset 2 (10000 items) > Normalized scan",
            "value": 561,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Simple property sort (String path)",
            "value": 25842,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Multi-criteria sort (Multi-keys)",
            "value": 36941,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Deep nested path sort (Deep path)",
            "value": 97275,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 26336,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > Custom callback function sort (SortKeyFn)",
            "value": 113049,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With explicit collator instance",
            "value": 17527,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 1 (100 items) > With custom sensitivity options (Cache key generation)",
            "value": 17053,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Simple property sort (String path)",
            "value": 167,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Multi-criteria sort (Multi-keys)",
            "value": 243,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Deep nested path sort (Deep path)",
            "value": 596,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Specific key configuration sort (SortKeyConfig)",
            "value": 168,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > Custom callback function sort (SortKeyFn)",
            "value": 705,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With explicit collator instance",
            "value": 114,
            "unit": "hz"
          },
          {
            "name": "test/sort.bench.ts > sort() - Dataset 2 (10000 items) > With custom sensitivity options (Cache key generation)",
            "value": 113,
            "unit": "hz"
          }
        ]
      }
    ]
  }
}