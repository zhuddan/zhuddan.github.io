# TopoJSON 转 GeoJSON

要将不规则的 GeoJSON（特别是 TopoJSON）转换为标准的 GeoJSON，可以使用一些工具和库来处理这些数据。TopoJSON 是 GeoJSON 的一种扩展，用于更高效地存储拓扑结构信息。在这里，我们可以使用 TopoJSON 库来进行转换

首先，我们需要确保安装了所需的工具。我们可以使用 Node.js 环境中的 TopoJSON 工具来转换。

1. 安装 Node.js 和 npm（如果还没有安装）。
2. 安装 topojson-client 和 topojson-server 工具：

```sh
npm install -g topojson-client topojson-server
```

3. 然后，我们可以使用以下步骤将 TopoJSON 转换为标准的 GeoJSON：

```sh
topo2geo NationalBorder=- < input.topojson > output.geojson
```

<details>
<summary>举例</summary>

TopoJSON

```json
{
  "arcs": [
    [
      [39519, 1538],
      [-12, -10],
      [-28, 10],
      [0, 19],
      [5, 24],
      [15, 7],
      [9, 1],
      [17, -6],
      [3, -24],
      [-9, -21]
    ],
    [
      [39164, 1613],
      [-25, -3],
      [-9, 21],
      [-3, 17],
      [20, 11],
      [24, -1],
      [12, -17],
      [-6, -19],
      [-13, -9]
    ],
    [
      [39265, 1592],
      [-18, -5],
      [-21, 7],
      [-6, 21],
      [0, 13],
      [5, 23],
      [23, 8],
      [9, -11],
      [15, -19],
      [14, -9],
      [17, -4],
      [-14, -17],
      [-24, -7]
    ],
    [
      [39228, 1892],
      [-18, -6],
      [-19, 2],
      [-9, 18],
      [1, 20],
      [11, 14],
      [21, 8],
      [29, 2],
      [17, -5],
      [0, -21],
      [-6, -14],
      [-15, -9],
      [-12, -9]
    ],
    [
      [39099, 2015],
      [-19, -16],
      [-20, 7],
      [-17, 11],
      [-11, 16],
      [6, 14],
      [20, 5],
      [23, -3],
      [17, -13],
      [1, -21]
    ]
  ],
  "objects": {
    "NationalBorder": {
      "geometries": [
        {
          "arcs": [0],
          "type": "LineString"
        },
        {
          "arcs": [1],
          "type": "LineString"
        },
        {
          "arcs": [2],
          "type": "LineString"
        },
        {
          "arcs": [3],
          "type": "LineString"
        },
        {
          "arcs": [4],
          "type": "LineString"
        },
        {
          "arcs": [5],
          "type": "LineString"
        },
        {
          "arcs": [6],
          "type": "LineString"
        },
        {
          "arcs": [7],
          "type": "LineString"
        }
      ],
      "type": "GeometryCollection"
    }
  },
  "transform": {
    "scale": [0.0009999999999999998, 0.001],
    "translate": [73.501, 3.437]
  },
  "type": "Topology"
}
```

转化之后:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [39519, 1538],
          [39507, 1528],
          [39479, 1538],
          [39479, 1557],
          [39484, 1581],
          [39499, 1588],
          [39508, 1589],
          [39525, 1583],
          [39528, 1559],
          [39519, 1538]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [39164, 1613],
          [39139, 1610],
          [39130, 1631],
          [39127, 1648],
          [39147, 1659],
          [39171, 1658],
          [39183, 1641],
          [39177, 1622],
          [39164, 1613]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [39265, 1592],
          [39247, 1587],
          [39226, 1599],
          [39220, 1620],
          [39220, 1633],
          [39225, 1656],
          [39248, 1664],
          [39257, 1653],
          [39272, 1634],
          [39286, 1625],
          [39303, 1621],
          [39289, 1604],
          [39265, 1592]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [39228, 1892],
          [39210, 1886],
          [39191, 1894],
          [39182, 1912],
          [39183, 1932],
          [39194, 1946],
          [39215, 1954],
          [39244, 1956],
          [39261, 1951],
          [39261, 1930],
          [39255, 1916],
          [39240, 1907],
          [39228, 1892]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [39099, 2015],
          [39080, 1999],
          [39060, 2006],
          [39043, 2017],
          [39032, 2033],
          [39038, 2047],
          [39058, 2052],
          [39081, 2049],
          [39098, 2036],
          [39099, 2015]
        ]
      },
      "properties": {}
    }
  ]
}
```

</details>
