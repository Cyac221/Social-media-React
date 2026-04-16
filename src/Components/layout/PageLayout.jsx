import LeftSidebar from '../feed/LeftSidebar'
import MainFeed from '../feed/MainFeed'
import RightSidebar from '../feed/RightSidebar'

export default function PageLayout() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
      <div className="w3-row">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  )
}
