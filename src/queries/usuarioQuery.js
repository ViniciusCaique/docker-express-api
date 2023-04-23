const query = {
    SELECT_USUARIOS: 'SELECT * FROM usuarios ORDER BY created_at DESC LIMIT 50',
    SELECT_USUARIO: 'SELECT * FROM usuarios WHERE id = ?',
    CREATE_USUARIO: 'INSERT INTO usuarios(nome, email, password) VALUES (?, ?, ?)',
    UPDATE_USUARIO: 'UPDATE usuarios SET nome = ?, email = ? email = password WHERE id = ?',
    DELETE_USUARIO: 'DELETE FROM usuarios WHERE id = ?'
}

export default query