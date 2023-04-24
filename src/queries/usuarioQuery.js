const query = {
    SELECT_USUARIOS: 'SELECT * FROM usuarios ORDER BY created_at DESC LIMIT 50',
    SELECT_USUARIO: 'SELECT * FROM usuarios WHERE id = ?',
    CREATE_USUARIO: 'INSERT INTO usuarios(name, email, senha) VALUES (?, ?, ?)',
    UPDATE_USUARIO: 'UPDATE usuarios SET name = ?, email = ? senha = ? WHERE id_usuario = ?',
    DELETE_USUARIO: 'DELETE FROM usuarios WHERE id = ?'
}

export default query