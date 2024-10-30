import { useState } from 'react';
import style from './PersonalInfoForm.module.css';

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    position: '',
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    country: '',
    province: '',
    phone: '',
    email: '',
    linkedin: '',
    mobility: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPositionDescription = () => {
    switch (formData.position) {
      case 'vaga1':
        return (
          <>
            <h3 className={style.vagaTitle}>Gestor de Produção de Enchidos e Latarías</h3>
            <p>Bem-vindo ao processo de candidatura para o cargo de Gestor de Produção de Enchidos e Latarías para uma empresa sediada em Maputo, especializada na produção e empacotamento de alimentos processados.</p>
            <p>Este formulário tem como objetivo recolher informações detalhadas sobre a sua experiência e competências essenciais para a função.</p>
            <p><i>*Apenas os candidatos pré-selecionados serão eventualmente contactados.</i></p>
          </>
        );
      case 'vaga2':
        return (
          <>
            <h3 className={style.vagaTitle}>Candidatura para a vaga de Fiel de Armazém</h3>
            <p>Estamos a contratar um(a) Fiel de Armazém para uma empresa que actua no sector de distribuição, localizada em Pemba.</p>
            <p>Se tens experiência em gestão de armazéns e desejas integrar uma equipa dinâmica, preenche o formulário abaixo para te candidatar.</p>
            <p><i>*Apenas os candidatos pré-selecionados serão eventualmente contactados.</i></p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.title}>Candidaturas Pathway</h1>
      
      <label className={style.label}>
        Selecione a vaga (select your application position) *
        <select name="position" value={formData.position} onChange={handleChange} required>
          <option value="">Please Select</option>
          <option value="vaga1">Gestor de Produção de Enchidos e Latarías</option>
          <option value="vaga2">Fiel de Armazém</option>
        </select>
      </label>

      {/* Exibir a descrição da vaga selecionada */}
      <div className={style.vagaDescription}>
        {getPositionDescription()}
      </div>

      {/* Restante do formulário */}
      <div className={style.row}>
        <label className={style.label}>
          Nome completo *
          <input type="text" name="firstName" placeholder="Primeiro nome" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label className={style.label}>
          Apelido *
          <input type="text" name="lastName" placeholder="Apelido" value={formData.lastName} onChange={handleChange} required />
        </label>
      </div>

      <div className={style.row}>
        <label className={style.label}>
          Idade *
          <input type="number" name="age" placeholder="Ex: 23" value={formData.age} onChange={handleChange} required />
        </label>

        <label className={style.label}>
          Nacionalidade *
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
        </label>
      </div>

      <div className={style.row}>
        <label className={style.label}>
          País de residência *
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </label>

        <label className={style.label}>
          Província de residência *
          <input type="text" name="province" value={formData.province} onChange={handleChange} required />
        </label>
      </div>

      <div className={style.row}>
        <label className={style.label}>
          Contacto telefónico *
          <input type="tel" name="phone" placeholder="Ex: 828384858" value={formData.phone} onChange={handleChange} required />
        </label>

        <label className={style.label}>
          Endereço de email *
          <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
        </label>
      </div>

      <label className={style.label}>
        LinkedIn (opcional)
        <input type="url" name="linkedin" placeholder="LinkedIn profile URL" value={formData.linkedin} onChange={handleChange} />
      </label>

      <fieldset className={style.checkboxGroup}>
        <legend>Disponibilidade para trabalhar fora da província de residência (mobilidade)</legend>
        <label className={style.checkboxLabel}>
          <input type="radio" name="mobility" value="sim" onChange={handleChange} required /> Sim
        </label>
        <label className={style.checkboxLabel}>
          <input type="radio" name="mobility" value="nao" onChange={handleChange} required /> Não
        </label>
        <label className={style.checkboxLabel}>
          <input type="radio" name="mobility" value="ocasional" onChange={handleChange} required /> Disponível para deslocações ocasionais
        </label>
      </fieldset>

      <button type="submit" className={style.submitButton}>Next</button>
    </div>
  );
}

export default PersonalInfoForm;
