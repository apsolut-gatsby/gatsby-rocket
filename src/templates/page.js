import * as React from "react";
import { BlockRendererProvider} from "@webdeveducation/wp-block-tools";

const Page = (props) => {

    console.log( props );
    return (
        <div>
            <BlockRendererProvider
                allBlocks={props.pageContext.blocks}
                renderComponent={(block) => {
                console.log( 'block', block.name );

                switch ( block.name ) {
                    case "core/paragraph":
                        return <div key={block.id}></div>
                }
            }}
            />
        </div>
    )

}

export default Page;