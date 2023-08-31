import React from "react"
import ContentLoader from "react-content-loader"

const TicketBlockSkeleton:React.FC = (props) => (
    <ContentLoader
        className='ticket-block skeleton'
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#dcdbdb"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="310" y="415" rx="3" ry="3" width="410" height="6" />
        <rect x="310" y="431" rx="3" ry="3" width="380" height="6" />
        <rect x="310" y="447" rx="3" ry="3" width="178" height="6" />
        <rect x="555" y="366" rx="0" ry="0" width="31" height="133" />
        <rect x="333" y="260" rx="10" ry="10" width="150" height="155" />
        <rect x="345" y="391" rx="5" ry="5" width="150" height="15" />
        <rect x="343" y="410" rx="5" ry="5" width="100" height="15" />
        <rect x="526" y="330" rx="5" ry="5" width="80" height="25" />
        <rect x="644" y="324" rx="5" ry="5" width="32" height="32" />
        <rect x="367" y="264" rx="0" ry="0" width="184" height="262" />
        <rect x="492" y="436" rx="0" ry="0" width="1" height="1" />
        <rect x="464" y="367" rx="0" ry="0" width="156" height="124" />
        <rect x="527" y="302" rx="0" ry="0" width="447" height="214" />
        <rect x="532" y="310" rx="0" ry="0" width="238" height="94" />
        <circle cx="550" cy="333" r="66" />
        <rect x="580" y="249" rx="0" ry="0" width="136" height="230" />
        <rect x="0" y="0" rx="5" ry="5" width="250" height="162" />
        <rect x="516" y="319" rx="0" ry="0" width="100" height="28" />
        <rect x="1" y="171" rx="10" ry="10" width="250" height="19" />
        <rect x="0" y="198" rx="10" ry="10" width="250" height="88" />
        <rect x="0" y="298" rx="6" ry="6" width="110" height="30" />
        <rect x="139" y="297" rx="15" ry="15" width="110" height="30" />
    </ContentLoader>
)

export default TicketBlockSkeleton