import { generateText, tool } from 'ai'
import { z } from 'zod'

import { RawContentFetcher } from '../utils/RawContentFetcher'

const BASE_DOCUMENTATION_URL = `https://raw.githubusercontent.com/VedantSG123/replicad-api-docs/main`
const INDEX_DOCUMENTATION_URL = `${BASE_DOCUMENTATION_URL}/index.md`

const contentFetcher = new RawContentFetcher()

const searchDocumentationIndexTool = tool({
  description: `Search the Replicad documentation index to get the exact path for documentatation for the respective functions, classes and their methods, interfaces and variables
Sample Documentation index content:
\`\`\`
## Drawing

- [DrawingPen](classes/DrawingPen.md)
- [drawRectangle](variables/drawRectangle.md)
- [draw](functions/draw.md)
- [drawCircle](functions/drawCircle.md)
- [drawEllipse](functions/drawEllipse.md)
- [drawFaceOutline](functions/drawFaceOutline.md)
- [drawParametricFunction](functions/drawParametricFunction.md)
- [drawPointsInterpolation](functions/drawPointsInterpolation.md)
- [drawPolysides](functions/drawPolysides.md)
- [drawProjection](functions/drawProjection.md)
- [drawRoundedRectangle](functions/drawRoundedRectangle.md)
- [drawSingleCircle](functions/drawSingleCircle.md)
- [drawSingleEllipse](functions/drawSingleEllipse.md)
- [drawText](functions/drawText.md)

## Import

- [importSTEP](functions/importSTEP.md)
- [importSTL](functions/importSTL.md)
\`\`\
The path for getting documentation for the \`DrawingPen\` class will be \`classes/DrawingPen.md\`, similarly path for getting documentation for \`draw\` function will be \`functions/draw.md\`
`,
  inputSchema: z.never(),
  execute: () => contentFetcher.fetchContent(INDEX_DOCUMENTATION_URL),
})

const getDocumentationTool = tool({
  description: `Get the detailed documentation about the respective functions, classes and their methods, interfaces and variables present in Replicad.`,
  inputSchema: z.object({ path: z.string() }),
  execute: async ({ path }) => {
    const result = contentFetcher.fetchContent(
      `${BASE_DOCUMENTATION_URL}/${path}`,
    )
    return result
  },
})
