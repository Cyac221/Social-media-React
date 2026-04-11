import LeftSidebar from './LeftSidebar'
import MainFeed from './MainFeed'
import RightSidebar from './RightSidebar'

export default function PageLayout() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
      <div className="w3-row">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  )
}