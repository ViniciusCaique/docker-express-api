const query = {
    SELECT_USUARIOS: 'SELECT * FROM usuarios ORDER BY created_at DESC LIMIT 50',
    SELECT_USUARIO: 'SELECT * FROM usuarios WHERE id_usuario = ?',
    CREATE_USUARIO: 'INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)',
    UPDATE_USUARIO: 'UPDATE usuarios SET nome = ?, email = ? senha = ? WHERE id_usuario = ?',
    DELETE_USUARIO: 'DELETE FROM usuarios WHERE id_usuario = ?'
}

export default query