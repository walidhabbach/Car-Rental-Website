package models;

import jakarta.persistence.*;

@Entity
public class Souscategorie {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idSousCategorie")
    private int idSousCategorie;
    @Basic
    @Column(name = "idCategorie")
    private int idCategorie;
    @Basic
    @Column(name = "souscategoryName")
    private String souscategoryName;

    public int getIdSousCategorie() {
        return idSousCategorie;
    }

    public void setIdSousCategorie(int idSousCategorie) {
        this.idSousCategorie = idSousCategorie;
    }

    public int getIdCategorie() {
        return idCategorie;
    }

    public void setIdCategorie(int idCategorie) {
        this.idCategorie = idCategorie;
    }

    public String getSouscategoryName() {
        return souscategoryName;
    }

    public void setSouscategoryName(String souscategoryName) {
        this.souscategoryName = souscategoryName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Souscategorie that = (Souscategorie) o;

        if (idSousCategorie != that.idSousCategorie) return false;
        if (idCategorie != that.idCategorie) return false;
        if (souscategoryName != null ? !souscategoryName.equals(that.souscategoryName) : that.souscategoryName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idSousCategorie;
        result = 31 * result + idCategorie;
        result = 31 * result + (souscategoryName != null ? souscategoryName.hashCode() : 0);
        return result;
    }
}
