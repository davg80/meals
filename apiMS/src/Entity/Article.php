<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\Timestampable;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ORM\Table(name: "articles")]
#[ORM\HasLifecycleCallbacks]
#[ApiResource()]
class Article
{
    use Timestampable;
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[ORM\Column(type: 'boolean')]
    private $is_publish;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'articles')]
    private $author;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: paragraph::class)]
    private $paragraph;

    public function __construct()
    {
        $this->paragraph = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getIsPublish(): ?bool
    {
        return $this->is_publish;
    }

    public function setIsPublish(bool $is_publish): self
    {
        $this->is_publish = $is_publish;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection<int, paragraph>
     */
    public function getParagraph(): Collection
    {
        return $this->paragraph;
    }

    public function addParagraph(paragraph $paragraph): self
    {
        if (!$this->paragraph->contains($paragraph)) {
            $this->paragraph[] = $paragraph;
            $paragraph->setArticle($this);
        }

        return $this;
    }

    public function removeParagraph(paragraph $paragraph): self
    {
        if ($this->paragraph->removeElement($paragraph)) {
            // set the owning side to null (unless already changed)
            if ($paragraph->getArticle() === $this) {
                $paragraph->setArticle(null);
            }
        }

        return $this;
    }
}
