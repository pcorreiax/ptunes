import SongCard from '../../assets/Components/SongCard'
import './mainContent.css'

export default function MainContent() {
    return (
        <div className="main-screen">
            <div className="content">
                <div className="sidebar">
                    <div className="sidebar-buttons">
                        <div className="sidebar-home">
                            Home
                        </div>
                        <div className="sidebar-search">
                            Search
                        </div>
                        <div className="sidebar-biblioteca">
                            Biblioteca
                        </div>
                    </div>
                    <hr/>
                    <div className="sidebar-liked-songs">
                        Liked songs
                    </div>
                    <hr/>
                </div>
                <div className="main-content">
                    <SongCard/>
                </div>
            </div>
            <div className="player-section">
                <div className="playing-album">
                    Album
                </div>
                <div className="playing-song">
                    player
                </div>
                <div className="playing-volume">
                    Volume
                </div>
            </div>
        </div>
    )
}