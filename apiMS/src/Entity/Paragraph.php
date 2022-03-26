<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\ResourceId;
use App\Repository\ParagraphRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ParagraphRepository::class)]
#[ORM\Table(name: "paragraphs")]
#[ApiResource]
class Paragraph
{
    use ResourceId;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['article_details_read'])]
    private $title;

    #[ORM\Column(type: 'text')]
    #[Groups(['article_details_read'])]
    private $content;

    #[ORM\ManyToOne(targetEntity: Article::class, inversedBy: 'paragraph')]
    #[ORM\JoinColumn(nullable: false)]
    private $article;

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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }
}
