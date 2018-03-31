// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Git/Personal/idols/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-idol-js": preferDefault(require("C:\\Git\\Personal\\idols\\src\\templates\\idol.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Git\\Personal\\idols\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Git\\Personal\\idols\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\layout-index.json"),
  "parents.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\parents.json"),
  "significance.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\significance.json"),
  "heaven.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\heaven.json"),
  "pleasure.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\pleasure.json"),
  "relationship.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\relationship.json"),
  "next.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\next.json"),
  "success.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\success.json"),
  "404.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\404.json"),
  "index.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\index.json"),
  "404-html.json": require("C:\\Git\\Personal\\idols\\.cache\\json\\404-html.json")
}