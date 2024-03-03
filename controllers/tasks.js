import Task from '../models/Task.js';

// Crea una tarea
export const saveTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTask = new Task({
            title, 
            description
        });

        const newtask = newTask;
        await newtask.save();

        res.status(201).json({ message: '¡Tarea agregada con éxito!' });

    } catch (err) { // Captura el error como parámetro
        console.error(err); // Imprime el error en la consola
        res.status(500).json({ message: 'Error del servidor' });
    }
}


// Trae todas las tareas
export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks)

    }catch(err){
        console.error(err);
        res.status(500).json({ message: ' Error del servidor'})
    }
}


// Trae una tarea por id
export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id); // Espera a que la promesa se resuelva
        if (!task) { // Verifica si la tarea no se encontró
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json(task); // Envía la tarea encontrada en la respuesta JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
}


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id); // Espera a que la promesa se resuelva
        if (!task) { // Verifica si la tarea no se encontró
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada' }); // Envía la tarea encontrada en la respuesta JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
}


export const updateTask = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID de la tarea de los parámetros de la solicitud
        const { title, description } = req.body; // Obtén los datos actualizados de la tarea del cuerpo de la solicitud

        const updatedTask = await Task.findByIdAndUpdate(id, { title, description }); // Espera a que la promesa se resuelva y actualiza la tarea

        if (!updatedTask) { // Verifica si la tarea no se encontró
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        
        res.status(200).json({ message: 'Tarea actualizada con exito' }); // Envía la tarea actualizada en la respuesta JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
}


export const getTasksCount = async (req, res) => {
    try {
        const count = await Task.countDocuments({});
        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

