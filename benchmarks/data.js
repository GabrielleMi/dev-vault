window.BENCHMARK_DATA = {
  "lastUpdate": 1784334886241,
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
      }
    ]
  }
}