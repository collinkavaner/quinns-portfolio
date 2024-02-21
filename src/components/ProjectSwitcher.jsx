import { Link } from 'react-router-dom';
import styles from '../styles/projectSwitcher.module.css';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const ProjectSwitcher = ({ NextProject, PrevProject, NextUrl, PrevUrl }) => {
    return (
        <div className={styles.projectSwitcher}>
            <Link to={PrevUrl} className="primary-button">
                <HiChevronLeft className="chev-l" />
                <span>{PrevProject}</span>
            </Link>
            <Link to={NextUrl} className="primary-button">
                <span>{NextProject}</span>
                <HiChevronRight className="chev-r" />
            </Link>
        </div>
    )
}
export default ProjectSwitcher;