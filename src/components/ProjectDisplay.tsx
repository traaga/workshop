import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, getDoc, doc, query, where, getDocs } from "firebase/firestore";
import useWindowDimensions from "../other/useWindowDimensions";
import useFirebase from "../other/useFirebase";
import CircularProgress from "@mui/material/CircularProgress";
import { User } from "../other/GlobalStateContext";

export interface Project {
    id: string,
    description: string,
    photos: string[]
}

interface ProjectDisplayProps {
    id: string
}

const ProjectDisplay = ({ id }: ProjectDisplayProps) => {

    const [project, setProject] = useState<Project>();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(false);

    const { width } = useWindowDimensions();
    const { db } = useFirebase();

    const projectsCollectionRef = collection(db, "projects");

    useEffect(() => {

        const fetchProject = async () => {

            setLoading(true);

            const projectsRef = doc(db, "projects", id);
            const projectData = await getDoc(projectsRef);
            const projectParams = projectData.data();

            if(projectData.id && projectParams) {

                const project: Project = {
                    id: projectData.id,
                    description: projectParams.description,
                    photos: projectParams.photos
                }

                setProject(project);

                const usersRef = collection(db, "users");
                const userQuery = query(usersRef, where("projects", "array-contains", project.id));

                const userData = await getDocs(userQuery);

                if(userData.docs.length) {
                    const userParams = userData.docs[0].data();

                    if(userData.docs[0].id && userParams) {

                        const user: User = {
                            id: userData.docs[0].id,
                            email: userParams.email,
                            events: userParams.events,
                            name: userParams.name,
                            phone: userParams.phone,
                            photo: userParams.photo,
                            projects: userParams.projects,
                            role: userParams.role
                        }

                        setUser(user);
                    }
                }

                //const usersRef = doc(db, "users", project.user);
                //const userData = await getDoc(usersRef);
                //const userParams = userData.data();

                /*if(userData.id && userParams) {

                    const user: User = {
                        id: userData.id,
                        email: userParams.email,
                        events: userParams.events,
                        name: userParams.name,
                        phone: userParams.phone,
                        photo: userParams.photo,
                        projects: userParams.projects,
                        role: userParams.role
                    }

                    setUser(user);
                }*/
            }
            setLoading(false);
        };

        fetchProject();
    }, []);

    return (
        <Box sx={{
            position: "relative"
        }}>
            <Typography variant="subtitle1">{"Vastutav: " + user?.name + ", " + user?.email + ", " + user?.phone}</Typography>
            <Typography variant="subtitle1">{"Kirjeldus: " + project?.description}</Typography>

            <Box
                sx={{
                    marginTop: "16px",
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    cursor: "pointer",

                    // TEMPORARY
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}

                // TEMPORARY
                //component="img"
                //src="images/profile.jpg"
            >
                Pildivaade on arendamisel..
            </Box>

            {loading &&
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "whitesmoke",
                    opacity: "0.67",
                    zIndex: "3",
                }}>
                    <CircularProgress/>
                </Box>
            }
        </Box>
    );
};

export default ProjectDisplay;
