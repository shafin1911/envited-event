import { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const MemoizedMainRoutes = useMemo(() => MainRoutes(), []) 
    return useRoutes([MemoizedMainRoutes], config.basename);
}
