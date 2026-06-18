window.BENCHMARK_DATA = {
  "lastUpdate": 1781783432754,
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
          "id": "815cd19354c94c6d93f9998e2c1dc451f2a41128",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/815cd19354c94c6d93f9998e2c1dc451f2a41128"
        },
        "date": 1781783432278,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 5168454,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 4192458,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 4342484,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 4003434,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 4499650,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 12356904,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 16148,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 12995,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 8690,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 12524,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 150,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 153,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 406,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 83,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16385,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8737,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 13372,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 13036,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 131406,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 87,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 38,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 86,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 13486,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 9967,
            "unit": "hz"
          }
        ]
      }
    ]
  }
}