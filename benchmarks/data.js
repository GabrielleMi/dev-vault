window.BENCHMARK_DATA = {
  "lastUpdate": 1785544613860,
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
      }
    ]
  }
}